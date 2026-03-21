=========================================
ESDICA 360 - Visita Virtual PWA
=========================================

DESCRIÇÃO:
Aplicação web progressiva para a visita virtual 360º da ESDICA.
Permite navegação offline e instalação em dispositivos móveis (iOS/Android).

ESTRUTURA DE PASTAS:
- /assets/css: Estilos da interface.
- /assets/images: Logótipos e ícones da aplicação.
- /assets/panoramas: Fotografias 360.
- /assets/videos: Vídeos.
- /salas: Ficheiros HTML individuais para cada espaço da escola.
- index.html: Ponto de entrada e menu principal.
- sw.js: Service Worker que gere a cache e o modo offline.
- manifest.json: Configurações de instalação da App.

COMO ATUALIZAR A APP:
Sempre que forem feitas alterações nos ficheiros (HTML, CSS ou Imagens):
1. Abrir o ficheiro 'sw.js'.
2. Alterar a variável 'cacheName' para a versão seguinte (ex: v10 -> v11).
3. Fazer o Push para o GitHub.
4. A App atualizará automaticamente no telemóvel dos utilizadores no próximo acesso.

NOTAS TÉCNICAS:
- Requer HTTPS (fornecido pelo GitHub Pages) para o Service Worker funcionar.
- O ícone principal deve ter 512x512px para compatibilidade total.
- Compatível com a funcionalidade "Adicionar ao Ecrã Principal" no iOS Safari.

CONTACTO:
Clube CTE 
Agrupamento de Escolas de Cister
