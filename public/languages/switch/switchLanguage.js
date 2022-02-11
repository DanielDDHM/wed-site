// import { Component } from "react";
// import $ from "jquery";
// export default class languages extends Component {
// applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
//     this.swapCurrentlyActiveLanguage(oppositeLangIconId);
//     document.documentElement.lang = pickedLanguage;
//     var resumePath =
//       document.documentElement.lang === window.$primaryLanguage
//         ? `res_primaryLanguage.json`
//         : `res_secondaryLanguage.json`;
//     this.loadResumeFromPath(resumePath);
//   }

//   swapCurrentlyActiveLanguage(oppositeLangIconId) {
//     var pickedLangIconId =
//       oppositeLangIconId === window.$primaryLanguageIconId
//         ? window.$secondaryLanguageIconId
//         : window.$primaryLanguageIconId;
//     document
//       .getElementById(oppositeLangIconId)
//     document
//       .getElementById(pickedLangIconId)
//   }

//   componentDidMount() {
//     this.loadSharedData();
//     this.applyPickedLanguage(
//       window.$primaryLanguage,
//       window.$secondaryLanguageIconId
//     );
//   }

//   loadSharedData() {
//     $.ajax({
//       url: `portfolio_shared_data.json`,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState({ sharedData: data });
//         document.title = `${this.state.sharedData.basic_info.name}`;
//       }.bind(this),
//       error: function (xhr, status, err) {
//         alert(err);
//       },
//     });
//   }

//   loadResumeFromPath(path) {
//     $.ajax({
//       url: path,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState({ resumeData: data });
//       }.bind(this),
//       error: function (xhr, status, err) {
//         alert(err);
//       },
//     });
//   }
// }