import './App.css'
import ProfilePicture from 'components/profilePicture/profilePicture';
import NameTitleContainer from 'components/nameTitleContainer/nameTitleContainer';
import SkillContainer from 'components/skillContainer/skillContainer';
import ProjectContainer from './components/projectContainer/projectContainer';
import ResumeContainer from './components/resumeContainer/resumeContainer';


function App() {

	return (
		<>
			<div className={"flex flex-col justify-evenly items-center h-11/12 w-full gap-4 md:gap-8 p-0"}>
				<div className={"flex md:flex-row gap-6 md:gap-0 flex-col h-1/3 w-full md:w-3/4 justify-between items-center"}>
					<div className={"w-full md:w-1/3 h-full flex flex-col items-center justify-center"}>
						<ProfilePicture />
						<NameTitleContainer />
					</div>
					<ResumeContainer />
					<SkillContainer />
				</div>
				<div className={"w-full md:w-3/4 flex flex-col items-center md:items-start"}>
					<div>Projects</div>
					<ProjectContainer />
				</div>
			</div>
		</>
	)
}

export default App
