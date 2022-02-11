import React from "react";
import { Trans, useTranslation } from "react-i18next";

const I18NComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <h2>{t("My name is Shantanu")}</h2>
        <button onClick={(e) => changeLanguage("en")}>English</button>
        <button onClick={(e) => changeLanguage("fr")}>French</button>
        <button onClick={(e) => changeLanguage("de")}>German</button>
      </div>
      <div>
        <Trans>I eat an apple</Trans>
      </div>
    </div>
  );
};

export default I18NComponent;


//     Comp
//   /  / | \  \
//  ___________
// |          |
// | Factory  |
// |__________|