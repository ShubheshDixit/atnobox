import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddLink from './pages/AddLink'
import AddProject from './pages/AddProject'
import ProjectPage from './pages/ProjectPage'
import FilesHome from './pages/FilesHome'
import AddFile from './pages/AddFile'
import AddFolder from './pages/AddFolder'
import FilePage from './pages/FilePage'
import FolderPage from './pages/FoldersPage'


function App() {
  return (
      <Router>
         <div className="flex flex-col w-screen h-screen justify-center items-center bg-bg-dark text-white font-rubik overflow-x-auto">
          <Switch>

            <Route exact path="/">
              <Home></Home>
              
            </Route>
            <Route path="/add-link">
              <AddLink></AddLink>
            </Route>
            <Route path="/add-project">
              <AddProject></AddProject>
            </Route>
            <Route path="/projects/:id">
              <ProjectPage></ProjectPage>
            </Route>

            <Route path="/files">
              <FilesHome></FilesHome>
            </Route>
            <Route path="/add-folder">
              <AddFolder></AddFolder>
            </Route>
            <Route path="/add-file">
              <AddFile></AddFile>
            </Route>
            <Route path="/folder/:id">
              <FolderPage></FolderPage>
            </Route>
            <Route path="/file-view/:id">
              <FilePage></FilePage>
            </Route>

          </Switch>
        </div>
      </Router>
  )
}

export default App
