#include <GL/glut.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int width = 500,
    height = 500,
	x=0, y=0;

GLfloat vertices[3][2] = 
{
	{-0.5, -0.5},
	{0.0,  0.5},
	{0.5, -0.5}
};

GLfloat cores[3][3] = 
{
    {0.52, 0.89, 0.52},
    {1.0, 0.69, 0.4},
    {0.86, 0.72, 0.86}
};
 
// Declarações 
void init(void);
void render(void);
void eventos_teclado(unsigned char _key, int _x, int _y);
void show_info();
void show_extensions();

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_SINGLE  | GLUT_RGB);  // Especifica o buffer a ser utilizado
	glutInitWindowSize(width,height);  // Dimensoes da Janela em pixels
	glutInitWindowPosition(0,0); // Especifica coordenada superior esquerda 
	glutCreateWindow("Janela inicial"); // Cria a janela mas só exibe após mainLoop
	init();
	show_info();
	glutDisplayFunc(render); 
	glutKeyboardFunc(eventos_teclado);
	glutMainLoop();

	return 0;
}

void show_info(){
    printf("Empresa: %s\n", glGetString(GL_VENDOR));
    printf("Modelo: %s\n", glGetString(GL_RENDERER));
    printf("OpenGL: %s\n", glGetString(GL_VERSION));
    show_extensions();
}

void show_extensions(){
    const char* exts = glGetString(GL_EXTENSIONS);
    printf("Extensões: \n");

    char** t;
    for (t = &exts; **t != '\0'; (*t)++){
        if (**t == ' '){
            printf("\n");
        } else {
            printf("%c", **t);  
        }
    }
}

void desenha_tri(){    
    glBegin(GL_POINTS);
        glColor3f(0.52, 0.89, 0.52);
        glVertex2f(-0.5,-0.5);
        glColor3f(1.0, 0.69, 0.4);
        glVertex2f(0,0.5);
        glColor3f(0.86, 0.72, 0.86);
        glVertex2f(0.5,-0.5);
    glEnd();
}

void desenha_tri_vetor(){    
    glBegin(GL_TRIANGLES);
        for (int i = 0; i < 3; i++){
            glColor3fv(cores[i]);
            glVertex2fv(vertices[i]);            
        }
    glEnd();
}

void init(void){
    glClearColor(0.0, 0.0, 0.0, 0.0); // Cor do buffer

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
}

void render(void){
	glClear(GL_COLOR_BUFFER_BIT);   // Limpa para a cor do buffer
    // desenha_tri();
    desenha_tri_vetor();
	glFlush(); // Envia o desenho para o framebuffer
}

void eventos_teclado(unsigned char _key, int _x, int _y){
	switch (_key) {
		case 'q':
		case 27:
			exit(0);
			break;
	}
   glutPostRedisplay();
}
