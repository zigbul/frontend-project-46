install:
	npm ci

gendiff:
	gendiff

publish:
	npm publish --dry-run

lint:
	npx eslint

test:
	npm test