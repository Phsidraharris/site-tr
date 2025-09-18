// App.js - WEB
import React, { Component } from "react";
import { View } from "react-native";
import firebase from 'firebase'
import { connect } from 'react-firebase'

import WebRoutesGenerator from "../../components/src/NativeWebRouteWrapper";
import { ModalContainer } from "react-router-modal";
import HomeScreen from "../../components/src/HomeScreen";
import TopNav from "../../components/src/TopNav";

import InfoPage from '../../blocks/info-page/src/InfoPageBlock'
import AlertBlock from '../../blocks/alert/src/AlertBlock.web'
import Customisableuserprofiles2 from "../../blocks/customisableuserprofiles2/src/Customisableuserprofiles2";
import Tasks from "../../blocks/tasks/src/Tasks";
import TaskList from "../../blocks/tasks/src/TaskList";
import Task from "../../blocks/tasks/src/Task";
import OrderManagement from "../../blocks/ordermanagement/src/OrderManagement";
import Filteritems from "../../blocks/filteritems/src/Filteritems";
import Filteroptions from "../../blocks/filteritems/src/Filteroptions";
import Elasticsearch2 from "../../blocks/elasticsearch2/src/Elasticsearch2";
import Emailnotifications2 from "../../blocks/emailnotifications2/src/Emailnotifications2";
import CustomMemorandumForm from "../../blocks/customform3/src/CustomMemorandumForm.web";
import Customform3 from "../../blocks/customform3/src/Customform3.web";
import CustomValuationform from "../../blocks/customform3/src/CustomFormValuation.web";
import OTPInputAuth from "../../blocks/otp-input-confirmation/src/OTPInputAuth";
import Adminconsole2 from "../../blocks/adminconsole2/src/Adminconsole2";
import Formapprovalworkflow from "../../blocks/formapprovalworkflow/src/Formapprovalworkflow";
import Inapppurchasing from "../../blocks/inapppurchasing/src/Inapppurchasing";
import CountryCodeSelector from "../../blocks/country-code-selector/src/CountryCodeSelector";
import AccountGroups from "../../blocks/accountgroups/src/AccountGroups";
import Scheduling from "../../blocks/scheduling/src/Scheduling";
import Settings2 from "../../blocks/settings2/src/Settings2";
import About from "../../blocks/settings2/src/About.web";
import Share from "../../blocks/share/src/Share";
import Rolesandpermissions from "../../blocks/rolesandpermissions/src/Rolesandpermissions";
import Sorting from "../../blocks/sorting/src/Sorting";
import Auctionbidding from "../../blocks/auctionbidding/src/Auctionbidding";
import SocialMediaAccountLoginScreen from "../../blocks/social-media-account-login/src/SocialMediaAccountLoginScreen";
import RequestManagement from "../../blocks/requestmanagement/src/RequestManagement";
import SocialMediaAccountRegistrationScreen from "../../blocks/social-media-account-registration/src/SocialMediaAccountRegistrationScreen";
import Ordercreation2 from "../../blocks/ordercreation2/src/Ordercreation2";
import Videos from "../../blocks/videos/src/Videos";
import ForgotPassword from "../../blocks/forgot-password/src/ForgotPassword.web";
import ForgotPasswordOTP from "../../blocks/forgot-password/src/ForgotPasswordOTP";
import NewPassword from "../../blocks/forgot-password/src/NewPassword.web";
import Dashboard from "../../blocks/dashboard/src/Dashboard";
import DashboardWeb from "../../blocks/dashboard/src/Dashboard.web";
import Chat from "../../blocks/chat/src/Chat";
import ChatView from "../../blocks/chat/src/ChatView";
import StripePayments from "../../blocks/stripepayments/src/StripePayments";
import InteractiveFaqs from "../../blocks/interactivefaqs/src/Interactivefaqs";
import TermsConditions from "../../blocks/termsconditions/src/TermsConditions";
import TermsConditionsDetail from "../../blocks/termsconditions/src/TermsConditionsDetail";
import TermsConditionsUsers from "../../blocks/termsconditions/src/TermsConditionsUsers";
import BulkUploading from "../../blocks/bulkuploading/src/BulkUploading";
import CarouselDisplay from "../../blocks/carouseldisplay/src/CarouselDisplay";
import LandingPage from "../../blocks/landingpage/src/LandingPage.web";
import EmailAccountRegistration from "../../blocks/email-account-registration/src/EmailAccountRegistration.web";
import Analytics from "../../blocks/analytics/src/Analytics";
import Categoriessubcategories from "../../blocks/categoriessubcategories/src/Categoriessubcategories";
import Maps from "../../blocks/maps/src/Maps";
import LoginOrSignup from "../../blocks/email-account-login/src/LoginOrSignup.web";
import ChooseType from '../../blocks/email-account-registration/src/ChooseType.web';
import Verification from '../../blocks/email-account-registration/src/Verification.web';
import Catalogue from "../../blocks/catalogue/src/Catalogue.web";
import AcceptedOffer from "../../blocks/dashboard/src/AcceptedOffers.web";
import Privacy from '../../blocks/email-account-registration/src/Privacy.web';
import Term from '../../blocks/email-account-registration/src/Term.web';
import VerificationPass from '../../blocks/forgot-password/src/VerificationPass.web';
import EmailAccountLoginBlock from "../../blocks/email-account-login/src/EmailAccountLoginBlock.web";
import Header from "../../blocks/catalogue/src/Header.web"
import FilterItemBox from "../../blocks/landingpage/src/FilterItemBox.web"
import ListMyProperty from "../../blocks/catalogue/src/ListMyProperty.web";
import NextScreen from "../../blocks/catalogue/src/NextScreen.web";
import Customisablebuyerprofiles from "../../blocks/customisableuserprofiles2/src/Customisablebuyerprofiles.web";
import CustomisableAgentProfiles from "../../blocks/customisableuserprofiles2/src/CustomisableAgentProfiles.web";
import CustomisableSolicitorProfiles from "../../blocks/customisableuserprofiles2/src/CustomisableSolicitorProfiles.web";
import MakeAnOffer from "../../blocks/customform3/src/MakeAnOffer.web";

const routeMap = {
  Customisableuserprofiles2: {
    component: Customisableuserprofiles2,
    path: "/Customisableuserprofiles2"
  },
  Tasks: {
    component: Tasks,
    path: "/Tasks"
  },
  TaskList: {
    component: TaskList,
    path: "/TaskList"
  },
  Task: {
    component: Task,
    path: "/Task"
  },
  OrderManagement: {
    component: OrderManagement,
    path: "/OrderManagement"
  },
  Filteritems: {
    component: Filteritems,
    path: "/Filteritems"
  },
  Filteroptions: {
    component: Filteroptions,
    path: "/Filteroptions"
  },
  Elasticsearch2: {
    component: Elasticsearch2,
    path: "/Elasticsearch2"
  },
  Emailnotifications2: {
    component: Emailnotifications2,
    path: "/Emailnotifications2"
  },
  Customform3: {
    component: Customform3,
    path: "/Customform3"
  },
  CustomMemorandumForm: {
    component: CustomMemorandumForm,
    path: "/CustomMemorandumForm"
  },
  CustomValuationform3: {
    component: CustomValuationform,
    path: "/CustomValuationform"
  },
  OTPInputAuth: {
    component: OTPInputAuth,
    path: "/OTPInputAuth"
  },
  Adminconsole2: {
    component: Adminconsole2,
    path: "/Adminconsole2"
  },
  Formapprovalworkflow: {
    component: Formapprovalworkflow,
    path: "/Formapprovalworkflow"
  },
  Inapppurchasing: {
    component: Inapppurchasing,
    path: "/Inapppurchasing"
  },
  CountryCodeSelector: {
    component: CountryCodeSelector,
    path: "/CountryCodeSelector"
  },
  // Catalogue:{
  //  component:Catalogue,
  // path:"/Catalogue"},
  AccountGroups: {
    component: AccountGroups,
    path: "/AccountGroups"
  },
  Scheduling: {
    component: Scheduling,
    path: "/Scheduling"
  },
  Settings2: {
    component: Settings2,
    path: "/Settings",
    exact: true
  },
  About: {
    component: About,
    path: '/Settings/About',
    exact: true
  },
  Share: {
    component: Share,
    path: "/Share"
  },
  Rolesandpermissions: {
    component: Rolesandpermissions,
    path: "/Rolesandpermissions"
  },
  Sorting: {
    component: Sorting,
    path: "/Sorting"
  },
  Auctionbidding: {
    component: Auctionbidding,
    path: "/Auctionbidding"
  },
  SocialMediaAccountLoginScreen: {
    component: SocialMediaAccountLoginScreen,
    path: "/SocialMediaAccountLoginScreen"
  },
  RequestManagement: {
    component: RequestManagement,
    path: "/RequestManagement"
  },
  SocialMediaAccountRegistrationScreen: {
    component: SocialMediaAccountRegistrationScreen,
    path: "/SocialMediaAccountRegistrationScreen"
  },


  Ordercreation2: {
    component: Ordercreation2,
    path: "/Ordercreation2"
  },
  Videos: {
    component: Videos,
    path: "/Videos"
  },
  ForgotPassword: {
    component: ForgotPassword,
    path: "/ForgotPassword"
  },
  ForgotPasswordOTP: {
    component: ForgotPasswordOTP,
    path: "/ForgotPasswordOTP"
  },
  NewPassword: {
    component: NewPassword,
    path: "/NewPassword"
  },
  Dashboard: {
    component: Dashboard,
    path: "/Dashboard"
  },
  DashboardWeb: {
    component: DashboardWeb,
    path: "/DashboardWeb"
  },
  Chat: {
    component: Chat,
    path: "/Chat"
  },
  ChatView: {
    component: ChatView,
    path: "/ChatView"
  },
  StripePayments: {
    component: StripePayments,
    path: "/StripePayments"
  },
  InteractiveFaqs:{
    component:InteractiveFaqs,
   path:"/InteractiveFaqs"
  },
  TermsConditions: {
    component: TermsConditions,
    path: "/TermsConditions"
  },
  TermsConditionsDetail: {
    component: TermsConditionsDetail,
    path: "/TermsConditionsDetail"
  },
  TermsConditionsUsers: {
    component: TermsConditionsUsers,
    path: "/TermsConditionsUsers"
  },
  BulkUploading: {
    component: BulkUploading,
    path: "/BulkUploading"
  },
  CarouselDisplay: {
    component: CarouselDisplay,
    path: "/CarouselDisplay/:imgId"
  },
  LandingPage: {
    component: LandingPage,
    path: "/LandingPage"
  },
  EmailAccountRegistration: {
    component: EmailAccountRegistration,
    path: "/EmailAccountRegistration"
  },
  Analytics: {
    component: Analytics,
    path: "/Analytics"
  },
  Categoriessubcategories: {
    component: Categoriessubcategories,
    path: "/Categoriessubcategories"
  },
  Maps: {
    component: Maps,
    path: "/Maps"
  },

  Home: {
    component: LandingPage,
    path: '/',
    exact: true
  },
  InfoPage: {
    component: InfoPage,
    path: '/InfoPage'
  },

  // AlertWeb: {
  //   component: AlertBlock,
  //   path: "*/AlertWeb",
  //   modal: true
  // },
  EmailAccountLoginBlock: {
    component: EmailAccountLoginBlock,
    path: "/EmailAccountLoginBlock"
  },
  LoginOrSignup: {
    component: LoginOrSignup,
    path: "/loginsignup",
  },
  ChooseType: {
    component: ChooseType,
    path: "/choosetype"
  },
  Verification: {
    component: Verification,
    path: "/verification"
  },
  Privacy: {
    component: Privacy,
    path: '/privacy'
  },
  Term: {
    component: Term,
    path: '/term'
  },
  VerificationPass: {
    component: VerificationPass,
    path: '/VerificationPass'
  },
  Catalogue: {
    component: Catalogue,
    path: "/Catalogue",
  },
  AcceptedOffer: {
    component: AcceptedOffer,
    path: "/acceptedOffer"
  },
  Header:{
    component: Header,
    path:"/header"
  },
  FilterItemBox:{
    component: FilterItemBox,
    path: "/filterItem"
  },
  Customisablebuyerprofiles: {
    component: Customisablebuyerprofiles,
    path: "/customisableBuyerProfiles",
  },
  ListMyProperty:{
    component: ListMyProperty,
    path :"/ListMyProperty"
  },
  NextScreen:{
    component:NextScreen,
    path:"/nextScreen"
  },
  CustomisableAgentProfiles: {
    component: CustomisableAgentProfiles,
    path: "/customisableAgentProfiles"
  },
  CustomisableSolicitorProfiles: {
    component: CustomisableSolicitorProfiles,
    path: "/customisableSolicitorProfiles"
  },
  MakeAnOffer: {
    component: MakeAnOffer,
    path: "/makeAnOffer"
  }
};

const firebaseAPI = firebase.initializeApp({
  apiKey: "AIzaSyDgl9aTbKMdRZ9-ijSZRionh3V591gMJl4",
  authDomain: "rnmasterapp-c11e9.firebaseapp.com",
  databaseURL: "https://rnmasterapp-c11e9.firebaseio.com",
  projectId: "rnmasterapp-c11e9",
  storageBucket: "rnmasterapp-c11e9.appspot.com",
  messagingSenderId: "649592030497",
  appId: "1:649592030497:web:7728bee3f2baef208daa60",
  measurementId: "G-FYBCF3Z2W3"
});

class App extends Component {

  render() {

    const defaultAnalytics = firebaseAPI.analytics();
    defaultAnalytics.logEvent('APP_Loaded');

    return (
      <View style={{ minHeight: '100vh', }}>
        {/* <TopNav /> */}
        {WebRoutesGenerator({ routeMap })}
        <ModalContainer />
      </View>
    );
  }
}

export default App;
