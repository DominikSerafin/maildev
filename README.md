# MailDev

Fork of [maildev/maildev](https://github.com/maildev/maildev/) + improvements.


# Additions & changes

* Added ability to mark all emails as read
* Added confirmation step when deleting all emails
* Added total & unread emails counts
* Added email size information
* Merged PR for persistent storage ([maildev/maildev/pull/303](https://github.com/maildev/maildev/pull/303))
* Merged PR for dark theme (based on [maildev/maildev/pull/322](https://github.com/maildev/maildev/pull/322), but with complete style rewrite)
* Merged PR for GitHub Actions ([maildev/maildev/pull/333](https://github.com/maildev/maildev/pull/333))
* Fixed various issues (e.g. emails weren't always correctly marked as read, Docker healtcheck fix, etc.)
* New, refreshed web interface:

    ![Web light theme interface](/web-ui-light.png)

    ![Web dark theme interface](/web-ui-dark.png)

* Original for comparison:

    ![Original project web interface](/web-ui-original.png)



# Removed

* Expanded "toolbar mode"



# Docker Hub

https://hub.docker.com/r/dominikserafin/maildev
