# Facebook deep linker

Lightweight JavaScript module to **redirect Facebook web links to Facebook App on iOS and Android**, as it should be! Work for Pages, Groups and Profiles links.


## Why?
Unlike links to Facebook Messenger, Facebook links to Pages, Groups and Profiles are not deep linked to Facebook App on mobile devices 😡.

## Usage
Work without package manager or dependencies 🙂!

### Link the JavaScript:
```html
<script src="fb-deep-link.min.js"></script>
```

### Add the Facebook ID to your Facebook links:
```html
<a href="{Fb-Link}" data-fbid="{Fb-ID}">My Facebook Link</a>
```

You can find your Facebook ID here: [Facebook Profile ID](https://www.facebook.com/help/1397933243846983), [Facebook Page ID](https://www.facebook.com/help/1503421039731588), or on this [third party website](https://findmyfbid.com/).

### Examples:
```html
<a href="https://facebook.com/GitHub/" data-fbid="262588213843476">GitHub Facebook Page</a>
<a href="https://facebook.com/groups/fbdevelopers/" data-fbid="146797922030397">Facebook Developer Group</a>
<a href="https://facebook.com/zuck" data-fbid="4">Mark Zuckerberg Profile</a>
```
This links should open inside Facebook App on iOS and Android.

## Disclaimer
Apps URL scheme (deep links) changes regularly. It is possible that this JavaScript module no longer work on iOS or Android in a few months.

## Support
Tested and working for Pages, Groups and Profiles in:
- Chrome 76 for Android, iOS and macOS
- Safari 12 for macOS and iOS 12
