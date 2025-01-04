# Hinode Module - Microsoft Clarity

<!-- Tagline -->
<p align="center">
    <b>A Hugo module to integrate Microsoft Clarity with your Hinode site</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/gethinode/mod-clarity/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/gethinode/mod-clarity.svg">
    </a>
    <a href="https://github.com/gethinode/mod-clarity/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/gethinode/mod-clarity.svg">
    </a>
    <a href="https://github.com/gethinode/mod-clarity/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/gethinode/mod-clarity.svg">
    </a>
    <a href="https://github.com/gethinode/mod-clarity/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/gethinode/mod-clarity">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. This repository maintains a Hugo module to enable [Microsoft Clarity][clarity] for a Hinode site. Visit the Hinode documentation site for [installation instructions][hinode_docs].

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

## Configuration

> [!WARNING]
> This module assumes you have properly configured a Cookie Consent Manager. The Clarity script is assigned to the category `analytics`. Cookie consent is automatically given when this script is loaded. Do not load this script without explicit consent from the user. See the [Hinode docs][hinode_cookie_consent] for more details.

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Setting                   | Default | Description |
|---------------------------|---------|-------------|
| clarity.id                |         | Tracking code of Microsoft Clarity (see [installation instructions][clarity_code])

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
[hinode_cookie_consent]: https://gethinode.com/docs/configuration/cookie-consent/
[clarity]: https://clarity.microsoft.com
[clarity_code]: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup#install-manually
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
