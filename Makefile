TESTS = test/*.test.js
TIMEOUT = 200000
REPORTER = spec

test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--timeout $(TIMEOUT) \
		--reporter ${REPORTER} \
		$(TESTS)


echo:
	echo "hello.."\
	 "this is Makefile"

.PHONY: test echo
