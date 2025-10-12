# Bash code used to create this repo structure originally.
# Init git----
git init

# Init npm----
npm init -y

# Install typsecript----
npm install --save-dev typescript ts-node @types/node

# Create folders----
mkdir -p .github/workflows
mkdir -p docs
mkdir -p projects/project-todo-app/src
mkdir -p projects/project-todo-app/tests
mkdir -p practice
mkdir -p utils

# Make the files----
touch .gitignore README.md
touch docs/learning-plan.md
touch practice/01-types.ts practice/02-interfaces.ts practice/03-generics.ts practice/README.md
touch projects/project-todo-app/src/index.ts
touch projects/project-todo-app/tests/index.test.ts
touch projects/project-todo-app/README.md
touch projects/project-todo-app/tsconfig.json # Project level config file if top level needs to be overridden
touch utils/logger.ts
touch .github/workflows/node.js.yml

# Make a top level typescript config file
npx tsc --init

# Add these to standard node gitignore
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore