# Front

## Initialisation du projet (Développement)

Pour initialiser le projet en vue de son développement, veuillez suivre les étapes ci-dessous :

1. Cloner le projet en utilisant la commande `git clone` ou via votre IDE
2. Dans le terminal, naviguez jusqu'à la racine du projet et exécutez les commandes suivantes dans l'ordre :
   - `pnpm --filter front i` (cette commande installe les dépendances du projet front)
   - `pnpm --filter ui i` (cette commande installe les dépendances du projet ui)
3. Pour lancer les deux environnements (front et ui), exécutez la commande `pnpm -r --parallel run dev` à la racine du projet.

> :warning: Si Storybook ne se lance pas, suivez les étapes ci-dessous :
> - Exécutez la commande `pnpx storybook@next init -s -f` dans le dossier `ui`
> - Exécutez la commande `pnpm i`
> - Dans le fichier `package.json`, dans la partie `"scripts"`, si deux scripts exécutant `"storybook dev -p 6006"` existent, supprimez le script `"storybook"` et gardez le `"dev"`.
> 
> Le Storybook devrait maintenant fonctionner. Pour le lancer, exécutez la commande `pnpm -r --parallel run dev` à la racine du projet.

