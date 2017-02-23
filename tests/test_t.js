import { expect } from 'chai';
import { t, useLocale } from '../src/index';
import { loadLocale } from '../src/loader';

describe('t', () => {
    before(() => {
        loadLocale('en', 'tests/fixtures/test-loader.mo');
        useLocale('en');
    });

    it('should resolve translation', () => {
        expect(t`test`).to.eql('test [translation]');
    });

    it('should use the same str if no translation found', () => {
        expect(t`not found`).to.eql('not found');
    });
});