import skimage as ski
import numpy as np
import time as t
import math

def pinta_pixel_cor(img, x, y, cor):
	img[y-1,x-1] = cor

def salva_img(img, nome):
	ski.io.imsave(f'{nome}.ppm', np.flipud(img), 'pil')

def raster_tri(img, p0, p1, p2, c0, c1, c2):
	altura, largura = img.shape[0], img.shape[1]
	alpha, beta, gama = 1, 1, 1

	# Pixels
	x0, y0 = p0.astype(int)
	x1, y1 = p1.astype(int)
	x2, y2 = p2.astype(int)
	
	pts = []
	cores = []
	y=y0
	
	for x in range(largura):
		for y in range(altura):
			#alpha = ??
			#beta = ??
			#gama = ??

			if (0.0 <= alpha <= 1) and (0.0 <= beta <= 1) and (0.0 <= gama <= 1):
				cor = alpha*c0 + beta*c1 + gama*c2							
				pts.append([x,y])
				cores.append(cor)

	return np.asarray(pts), np.asarray(cores)


## Imagem (largura, altura)
## Matriz (linhas, colunas)
largura=500
altura=500
img_tri = np.ones((altura,largura,3))

# Coordenadas dos vértices, com x variando no intervalo [0, largura] e y em [0, altura]
v1 = np.array([50.0, 50.0])
v2 = np.array([360.0, 480.0])
v3 = np.array([400.0, 40.0])

# Cores dos vertices
c1 = np.array([0.8, 1.0, 0.8])
c2 = np.array([1.0, 0.85, 0.7])
c3 = np.array([0.85, 0.7, 0.85])

# Rasterizacao com medicao de tempo
t_0 = t.time()
pts_tri, cores_tri = raster_tri(img_tri, v1, v2, v3, c1, c2, c3)
t_f = t.time()

# Informacoes sobre a rasterizacao
tempo = t_f-t_0
fps = max(1, round(1.0/tempo))
perc = len(pts_tri)*100/(largura*altura)

print(f'Rasterização concluída em {tempo} segundos.')
print(f'Essa estratégia de rasterização geraria {fps} frame(s) por segundo (FPS).')
print(f'De {largura*altura} pixels, um total de {len(pts_tri)} pixels foram pintados ({perc}%)')

# Debug
for i,_ in enumerate(pts_tri):
	x,y = pts_tri[i]
	cor = cores_tri[i]
	pinta_pixel_cor(img_tri, x, y, cor)

# Escrita do que iria no framebuffer
salva_img(img_tri, 'img_tri')
