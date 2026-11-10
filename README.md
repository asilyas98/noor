# Noor — iPhone App (Capacitor)

**This is an iOS app source project, not a precompiled IPA.** It wraps the Noor social-feed prototype in a native iOS WKWebView using Capacitor. The native Xcode project is generated on a Mac/Codemagic; no Mac is required to edit the app.

## Current features
- Vertical Islamic reminder feed with full-screen swipe/scroll
- Explore categories, search, likes, comments, saved posts, follows, and profiles
- Add locally stored video posts (up to 100 MB)
- iOS-capable app shell and branded icon

**Important:** Demo posts are text reminders rather than hosted streaming video. Posts, videos, comments, and follows remain on one device. No authentication, shared live community, cloud video hosting, or real moderation exist yet. It is not ready to represent itself as a fully functioning Instagram-like public social network.

## Codemagic build instructions
1. Extract this ZIP and push the **contents of the `noor-ios` directory** to a new GitHub repository. Make sure `codemagic.yaml` is in the repo root.
2. In Codemagic, add that GitHub repository as an app and select **Noor — App Store IPA**.
3. In Apple Developer, register the **Bundle ID `com.simpleai.noor`** (or change the ID in both `capacitor.config.json` and `codemagic.yaml` before building).
4. Connect Codemagic to Apple Developer/App Store Connect, and configure an App Store distribution certificate and provisioning profile for this bundle ID using Codemagic's iOS code signing setup.
5. Start the workflow. Once signing is configured, its artifact is a signed `.ipa` for upload to App Store Connect/TestFlight. It will not directly install on arbitrary iPhones without proper distribution.

## Local development
```bash
npm install
npm run build
npm run ios:add  # Mac required to finish native iOS setup
npm run ios:open # Mac with Xcode
```

The sample UI can be opened from `www/index.html` in a browser immediately. iOS builds must run on a Mac with Xcode, e.g. via Codemagic.

## Before a public App Store launch
Build an actual multi-user backend (auth, video delivery, reporting, real moderation), a privacy policy, terms, and Apple-required App Privacy disclosures. Ensure the Islamic-only promise has working review/enforcement before opening user uploads publicly.
