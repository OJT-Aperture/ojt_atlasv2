import { createBrowserRouter } from "react-router-dom";
import { BasisLayout } from "./screens/BasisLayout";
import { LoginScherm } from "./screens/LoginScherm";
import { Aandachtpunten } from "./screens/Aandachtpunten";
import { HelpEnSupport } from "./screens/HelpEnSupport";
import { Klassen } from "./screens/Klassen";
import { KlassenInformatie } from "./screens/KlassenInformatie";
import { LeerlingScherm } from "./screens/LeerlingScherm";
import { LeerlingSchermScreen } from "./screens/LeerlingSchermScreen";
import { ModuleScherm } from "./screens/ModuleScherm";
import { ModuleSchermModule } from "./screens/ModuleSchermModule";
import { UltimateClassroom } from "./screens/UltimateClassroom";
import { TMeting } from "./screens/TMeting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasisLayout />,
  },
  {
    path: "/login",
    element: <LoginScherm />,
  },
  {
    path: "/aandachtpunten",
    element: <Aandachtpunten />,
  },
  {
    path: "/help-en-support",
    element: <HelpEnSupport />,
  },
  {
    path: "/klassen",
    element: <Klassen />,
  },
  {
    path: "/klassen-informatie",
    element: <KlassenInformatie />,
  },
  {
    path: "/leerling-scherm",
    element: <LeerlingScherm />,
  },
  {
    path: "/leerling-scherm-screen",
    element: <LeerlingSchermScreen />,
  },
  {
    path: "/module-scherm",
    element: <ModuleScherm />,
  },
  {
    path: "/module-scherm-module",
    element: <ModuleSchermModule />,
  },
  {
    path: "/ultimate-classroom",
    element: <UltimateClassroom />,
  },
  {
    path: "/tmeting",
    element: <TMeting />,
  },
]);
