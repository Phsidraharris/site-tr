# **React Native** | _**ASTxio**_ | _**331239**_ | _**studio_pro**_

## **Catalog ProjectId: 164461** | **Catalog BuildId: 23104**

## NOTE FOR DEVELOPERS:
Clone the code-engine branch into your working branch. The contents of the branch may get overwritten.
## Author:
Code-Engine
## Keywords:
 - astxio
 - web
## Assembled Features To Block Status

| **Feature-Name**        | **Block-Name**        | **Path**  | **Status**  |
|:-------------|:-------------|:-------------|:-------------|
| landingpage2      | landingpage<br>core<br>      | {+packages/blocks/landingpage+}<br>{+packages/blocks/core+}<br> | {+Non-Empty+} |
| termsandconditions3      | termsconditions<br>      | {+packages/blocks/termsconditions+}<br> | {+Non-Empty+} |
| share2      | share<br>      | {+packages/blocks/share+}<br> | {+Non-Empty+} |
| signuplogin      | social-media-account-registration<br>social-media-account<br>utilities<br>email-account-login<br>email-account-registration<br>country-code-selector<br>forgot-password<br>otp-input-confirmation<br>social-media-account-login<br>      | {+packages/blocks/social-media-account-registration+}<br>{+packages/blocks/social-media-account+}<br>{+packages/blocks/utilities+}<br>{+packages/blocks/email-account-login+}<br>{+packages/blocks/email-account-registration+}<br>{+packages/blocks/country-code-selector+}<br>{+packages/blocks/forgot-password+}<br>{+packages/blocks/otp-input-confirmation+}<br>{+packages/blocks/social-media-account-login+}<br> | {+Non-Empty+} |
| catalogue2      | catalogue<br>      | {+packages/blocks/catalogue+}<br> | {+Non-Empty+} |
| sorting6      | sorting<br>      | {+packages/blocks/sorting+}<br> | {+Non-Empty+} |
| filteritems      | filteritems<br>      | {+packages/blocks/filteritems+}<br> | {+Non-Empty+} |
| bulkuploading2      | bulkuploading<br>      | {+packages/blocks/bulkuploading+}<br> | {+Non-Empty+} |
| stripeintegration3      | stripepayments<br>      | {+packages/blocks/stripepayments+}<br> | {+Non-Empty+} |
| taskgroups2      | tasks<br>accountgroups<br>      | {+packages/blocks/tasks+}<br>{+packages/blocks/accountgroups+}<br> | {+Non-Empty+} |
| categoriessubcategories2      | categoriessubcategories<br>      | {+packages/blocks/categoriessubcategories+}<br> | {+Non-Empty+} |
| customisedorderstatus2      | ordermanagement<br>      | {+packages/blocks/ordermanagement+}<br> | {+Non-Empty+} |
| videos      | videos<br>      | {+packages/blocks/videos+}<br> | {+Non-Empty+} |
| maps3      | maps<br>      | {+packages/blocks/maps+}<br> | {+Non-Empty+} |
| carouseldisplay2      | carouseldisplay<br>      | {+packages/blocks/carouseldisplay+}<br> | {+Non-Empty+} |
| requestmanagement2      | requestmanagement<br>      | {+packages/blocks/requestmanagement+}<br> | {+Non-Empty+} |
| analytics5      | analytics<br>      | {+packages/blocks/analytics+}<br> | {+Non-Empty+} |
| chat3      | chat<br>      | {+packages/blocks/chat+}<br> | {+Non-Empty+} |
| dashboard4      | dashboard<br>      | {+packages/blocks/dashboard+}<br> | {+Non-Empty+} |
| scheduling2      | scheduling<br>      | {+packages/blocks/scheduling+}<br> | {+Non-Empty+} |
| rolesandpermissions      | rolesandpermissions      | {-packages/blocks/rolesandpermissions-} | {-Empty-} |
| formapprovalworkflow      | formapprovalworkflow      | {-packages/blocks/formapprovalworkflow-} | {-Empty-} |
| elasticsearch2      | elasticsearch2      | {-packages/blocks/elasticsearch2-} | {-Empty-} |
| auctionbidding      | auctionbidding      | {-packages/blocks/auctionbidding-} | {-Empty-} |
| inapppurchasing      | inapppurchasing      | {-packages/blocks/inapppurchasing-} | {-Empty-} |
| ordercreation2      | ordercreation2      | {-packages/blocks/ordercreation2-} | {-Empty-} |
| emailnotifications2      | emailnotifications2      | {-packages/blocks/emailnotifications2-} | {-Empty-} |
| customform3      | customform3      | {-packages/blocks/customform3-} | {-Empty-} |
| adminconsole2      | adminconsole2      | {-packages/blocks/adminconsole2-} | {-Empty-} |
| customisableuserprofiles2      | customisableuserprofiles2      | {-packages/blocks/customisableuserprofiles2-} | {-Empty-} |
| settings2      | settings2      | {-packages/blocks/settings2-} | {-Empty-} |

## AWS BACKEND DEPLOYMENT URL
 - BaseURL exported as: "https://project-name-notfound-331239-ruby.b331239.prd.eastus.az.svc.builder.ai"
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

See docs folder for additional information.

### Prerequisites

What things you need to install the software and how to install them

* React Native (last tested on react-native0.61.3)
  - https://facebook.github.io/react-native/docs/getting-started

* IFF brew is installed and user doesn't have permisions.
```
  $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* XCode 11 or greater

* XCode Command Line Tools
```
  $ xcode-select --install
```

* Android SDK
```
  $ brew cask install android-sdk
```

* JDK 11
```
  $ brew tap homebrew/cask-versions
  $ brew cask install java
  $ brew cask install java11
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install yarn
```
  $ brew install yarn
```

Install node

```
  $ brew install node
```

Web
```
  $ yarn
  $ yarn workspace web start 
  (Note: After udpating depencies run again if no cocde erros. )
```

iOS
```
  $ yarn
  $ cd packages/mobile/ios && pod install && cd ../../../ && cp node-runners/RCTUIImageViewAnimated.m node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m && npx react-native bundle --entry-file ./packages/mobile/index.js --platform ios --dev true --bundle-output ./packages/mobile/ios/main.jsbundle && yarn ios
```

Android - https://docs.expo.io/versions/latest/workflow/android-studio-emulator/
```
  $ yarn
  $ export JAVA_HOME=`/usr/libexec/java_home -v 11`; java -version; export ANDROID_HOME=${HOME}/Library/Android/sdk; export PATH=${PATH}:${ANDROID_HOME}/emulator && yarn android
```

## Running the tests

```
  $ yarn test
```


## CI/CD Details

We use GitlabCI for our deployment/Build pipelines

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).



