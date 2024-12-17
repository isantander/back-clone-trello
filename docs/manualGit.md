
# **Manual de Uso de Git**  
### *Guía completa de comandos y buenas prácticas*

---

## **Índice**  
1. [¿Qué es Git?](#qué-es-git)  
2. [Configuración Inicial](#configuración-inicial)  
3. [Crear un Repositorio desde Cero](#crear-un-repositorio-desde-cero)  
4. [Clonar un Repositorio Existente](#clonar-un-repositorio-existente)  
5. [Trabajar con Cambios](#trabajar-con-cambios)  
   - [Agregar Cambios](#agregar-cambios)  
   - [Guardar Cambios](#guardar-cambios)  
   - [Enviar Cambios al Repositorio Remoto](#enviar-cambios-al-repositorio-remoto)  
   - [Ver el Estado del Repositorio](#ver-el-estado-del-repositorio)  
6. [Ramas en Git (Branches)](#ramas-en-git-branches)  
   - [Crear y Cambiar de Rama](#crear-y-cambiar-de-rama)  
   - [Fusionar Ramas](#fusionar-ramas)  
7. [Manejo de Conflictos](#manejo-de-conflictos)  
8. [Deshacer Cambios](#deshacer-cambios)  
   - [Deshacer Cambios No Confirmados](#deshacer-cambios-no-confirmados)  
   - [Revertir Commits Confirmados](#revertir-commits-confirmados)  
9. [Colaboración y Buenas Prácticas](#colaboración-y-buenas-prácticas)  
10. [Resumen de Comandos](#resumen-de-comandos)  

---

## **1. ¿Qué es Git?**  

Git es un **sistema de control de versiones** que permite rastrear los cambios en el código fuente durante el desarrollo de software. Facilita el trabajo colaborativo y ayuda a gestionar distintas versiones del proyecto.

- Fue creado por **Linus Torvalds** en 2005.  
- Es **distribuido**, lo que significa que cada copia local contiene todo el historial del proyecto.  

---

## **2. Configuración Inicial**  

Antes de comenzar a usar Git, configura tu nombre y correo electrónico. Estos datos se incluirán en cada commit.

```bash
# Configura tu nombre de usuario
git config --global user.name "Tu Nombre"

# Configura tu correo electrónico
git config --global user.email "tucorreo@ejemplo.com"

# Verifica tu configuración
git config --list
```

---

## **3. Crear un Repositorio desde Cero**  

Para iniciar un repositorio local en una carpeta nueva o existente:

```bash
# Crea una carpeta nueva y navega dentro de ella
mkdir mi-proyecto
cd mi-proyecto

# Inicializa un repositorio Git en la carpeta
git init
```

Esto creará una carpeta oculta `.git` donde Git guardará todo el historial del proyecto.

---

## **4. Clonar un Repositorio Existente**  

Para descargar un repositorio remoto (por ejemplo, desde GitHub):

```bash
# Clona un repositorio remoto
git clone https://github.com/usuario/nombre-repo.git

# Accede al directorio clonado
cd nombre-repo
```

---

## **5. Trabajar con Cambios**  

### **Agregar Cambios**  

1. Modifica archivos existentes o crea archivos nuevos.  
2. Luego, agrega los cambios al "staging area" con:

```bash
# Agregar un archivo específico
git add nombre-archivo.txt

# Agregar todos los cambios
git add .
```

---

### **Guardar Cambios**  

Confirma los cambios agregados al "staging area":

```bash
# Crear un commit con un mensaje descriptivo
git commit -m "Descripción breve del cambio realizado"
```

---

### **Enviar Cambios al Repositorio Remoto**  

Envía tus commits al repositorio remoto (ej. GitHub o GitLab):

```bash
# Empuja tus commits al servidor remoto
git push origin main
```

⚠️ **Nota**: Si trabajas en otra rama, reemplaza `main` por el nombre de tu rama.

---

### **Ver el Estado del Repositorio**  

Para verificar el estado actual:

```bash
git status
```

---

## **6. Ramas en Git (Branches)**  

Las ramas permiten trabajar en funcionalidades nuevas sin afectar la rama principal.

---

### **Crear y Cambiar de Rama**  

```bash
# Crear una nueva rama
git branch nombre-rama

# Cambiar a una rama específica
git checkout nombre-rama

# Crear y cambiar de rama al mismo tiempo
git checkout -b nombre-rama
```

---

### **Fusionar Ramas**  

Para combinar los cambios de una rama en `main`:

```bash
# Cambia a la rama principal
git checkout main

# Fusiona la otra rama
git merge nombre-rama
```

---

## **7. Manejo de Conflictos**  

Si se produce un conflicto al fusionar ramas:

1. Git marcará los archivos con conflictos.  
2. Abre los archivos y resuelve los conflictos manualmente.  
3. Después, agrega los cambios resueltos:

```bash
git add nombre-archivo
git commit -m "Conflicto resuelto"
```

---

## **8. Deshacer Cambios**  

### **Deshacer Cambios No Confirmados**  

```bash
# Elimina los cambios no confirmados en un archivo
git checkout -- nombre-archivo
```

---

### **Revertir Commits Confirmados**  

Si necesitas deshacer un commit ya confirmado:

```bash
# Revertir un commit específico
git revert id-del-commit
```

---

## **9. Colaboración y Buenas Prácticas**  

- Siempre **haz pull** antes de comenzar a trabajar:  
   ```bash
   git pull origin main
   ```  
- Realiza **commits pequeños** y con mensajes claros.  
- Usa ramas para nuevas funcionalidades o correcciones.  

---

## **10. Resumen de Comandos**  

| **Comando**                | **Descripción**                                 |
|----------------------------|-----------------------------------------------|
| `git init`                 | Inicializa un repositorio local.              |
| `git clone`                | Clona un repositorio remoto.                  |
| `git add .`                | Agrega todos los cambios al staging area.     |
| `git commit -m ""`         | Crea un commit con un mensaje.                |
| `git status`               | Muestra el estado del repositorio.            |
| `git branch`               | Lista las ramas existentes.                   |
| `git checkout -b nombre`   | Crea y cambia a una nueva rama.               |
| `git merge`                | Fusiona ramas.                                |
| `git revert`               | Revierte un commit específico.                |
| `git pull`                 | Descarga cambios desde el repositorio remoto. |
| `git push`                 | Sube commits al repositorio remoto.           |

---