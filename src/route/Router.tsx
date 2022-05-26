import { memo, VFC} from "react";
import { Route, Switch} from "react-router-dom";

import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/pagee404";
// import { NotFound } from "../components/pages/NotFound";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={( { match: {url} } ) => (
          <Switch>
            {HomeRoutes.map((router) => (
              <Route
                key={router.path}
                exact={router.exact}
                path={`${url}${router.path}`}
              >
                <HeaderLayout>{router.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*" render={() => <Page404 />} />
    </Switch>
  )
})