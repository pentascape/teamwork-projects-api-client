

.PHONY build
build:
	npm run build

.PHONY publish
publish: build
	npm run publish .
