import numpy as np
import skimage as ski
import time as t

# Função para pintar o pixel com a cor interpolada
def pinta_pixel_cor(img, x, y, cor):
    img[y-1, x-1] = cor

# Função para salvar a imagem
def salva_img(img, nome):
    ski.io.imsave(f'{nome}.ppm', np.flipud(img), 'pil')

# Função de rasterização com interpolação baricêntrica (sem otimização)
def raster_tri(img, p0, p1, p2, c0, c1, c2):
    altura, largura = img.shape[0], img.shape[1]

    # Coordenadas dos vértices
    x0, y0 = p0.astype(int)
    x1, y1 = p1.astype(int)
    x2, y2 = p2.astype(int)

    # Área do triângulo
    A_total = 0.5 * (-x1 * y2 + x0 * (-y1 + y2) + x1 * y0 + x2 * (-y0 + y1))

    pts = []
    cores = []
    
    # Iterar sobre todos os pixels da imagem
    for x in range(largura):
        for y in range(altura):
            # Calcular coordenadas baricêntricas
            alpha = (0.5 * (x * (y1 - y2) + x1 * (y2 - y) + x2 * (y - y1))) / A_total
            beta = (0.5 * (x * (y2 - y0) + x2 * (y0 - y) + x0 * (y - y2))) / A_total
            gamma = 1 - alpha - beta

            # Verificar se o ponto está dentro do triângulo
            if (0 <= alpha <= 1) and (0 <= beta <= 1) and (0 <= gamma <= 1):
                cor = alpha * c0 + beta * c1 + gamma * c2
                pts.append([x, y])
                cores.append(cor)

    return np.asarray(pts), np.asarray(cores)

# Função de rasterização otimizada com bounding box
def raster_tri_opt(img, p0, p1, p2, c0, c1, c2):
    altura, largura = img.shape[0], img.shape[1]
    
    # Coordenadas dos vértices
    x0, y0 = p0.astype(int)
    x1, y1 = p1.astype(int)
    x2, y2 = p2.astype(int)

    # Bounding box do triângulo
    x_min = max(0, min(x0, x1, x2))
    x_max = min(largura - 1, max(x0, x1, x2))
    y_min = max(0, min(y0, y1, y2))
    y_max = min(altura - 1, max(y0, y1, y2))

    # Área do triângulo
    A_total = 0.5 * (-x1 * y2 + x0 * (-y1 + y2) + x1 * y0 + x2 * (-y0 + y1))
    
    pts = []
    cores = []
    
    # Iterar apenas sobre o bounding box
    for x in range(x_min, x_max + 1):
        for y in range(y_min, y_max + 1):
            # Calcular coordenadas baricêntricas
            alpha = (0.5 * (x * (y1 - y2) + x1 * (y2 - y) + x2 * (y - y1))) / A_total
            beta = (0.5 * (x * (y2 - y0) + x2 * (y0 - y) + x0 * (y - y2))) / A_total
            gamma = 1 - alpha - beta

            # Verificar se o ponto está dentro do triângulo
            if (0 <= alpha <= 1) and (0 <= beta <= 1) and (0 <= gamma <= 1):
                cor = alpha * c0 + beta * c1 + gamma * c2
                pts.append([x, y])
                cores.append(cor)

    return np.asarray(pts), np.asarray(cores)

# Imagem (largura, altura)
largura = 500
altura = 500
img_tri = np.ones((altura, largura, 3))

# Coordenadas dos vértices, com x variando no intervalo [0, largura] e y em [0, altura]
v1 = np.array([50.0, 50.0])
v2 = np.array([360.0, 480.0])
v3 = np.array([400.0, 40.0])

# Cores dos vértices
c1 = np.array([0.8, 1.0, 0.8])
c2 = np.array([1.0, 0.85, 0.7])
c3 = np.array([0.85, 0.7, 0.85])

# Rasterização sem otimização (força bruta)
t_0 = t.time()
pts_tri, cores_tri = raster_tri(img_tri, v1, v2, v3, c1, c2, c3)
t_f = t.time()
tempo_normal = t_f - t_0

# Informações sobre a rasterização sem otimização
print(f'Rasterizacao (sem otimizacao) concluída em {tempo_normal:.6f} segundos.')

# Rasterização otimizada (com bounding box)
t_0 = t.time()
pts_tri_opt, cores_tri_opt = raster_tri_opt(img_tri, v1, v2, v3, c1, c2, c3)
t_f = t.time()
tempo_otimizado = t_f - t_0

# Informações sobre a rasterização otimizada
print(f'Rasterizacao (com bounding box) concluída em {tempo_otimizado:.6f} segundos.')

# Cálculo do speedup
speedup = tempo_normal / tempo_otimizado
print(f'Speedup: {speedup:.2f}')

# Debug: Pintar pixels e salvar imagem da versão otimizada
for i, _ in enumerate(pts_tri_opt):
    x, y = pts_tri_opt[i]
    cor = cores_tri_opt[i]
    pinta_pixel_cor(img_tri, x, y, cor)

# Salvar a imagem gerada
salva_img(img_tri, 'img_tri_optimizada')