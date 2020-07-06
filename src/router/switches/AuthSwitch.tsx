import { IRoute } from "../IRoute"
import { UploadRoute, DataRoute, AnalyzeRoute } from "../Routes"
import Upload from "../../components/AppModule/Upload/Upload/Upload"
import Data from "../../components/AppModule/Data/Data/Data"
import Analyze from "../../components/AnalysisModule/Analyze/Analyze"

const AuthSwitch: IRoute[] = [
  {
    path: AnalyzeRoute,
    component: Analyze
  },
  {
    path: DataRoute,
    component: Data
  },
  {
    path: UploadRoute,
    component: Upload
  }
]

export default AuthSwitch