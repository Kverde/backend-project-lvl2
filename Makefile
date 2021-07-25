install:
		npm ci --no-bin-links

lint: 
		npx eslint .

help:
		gendif -h

publish:
		npm publish --dry-run