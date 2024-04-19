# Pasos

npm init -y
npm i express
npm i typescript
tsc --init
npm i nodemon
Configurar el outdir en tsconfig.ts
"outDir":"./dist"

Para que reconozca el import de los types de express
npm i --save-dev @types/express