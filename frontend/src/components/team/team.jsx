import {
	BsLinkedin,
	BsTwitter
} from 'react-icons/bs';

const members = [
	{
		name: "John Frosch",
		title: "Technical Writer",
	},

	{
		name: "Mary McQuin",
		title: "Copywriter",
	},

	{
		name: "Isabel Napael",
		title: "Content Creator",
	},

];


function TeamCard({props}){
	const [ member, id ] = props;
	return (
		<div className="w-72 h-auto mb-3">
			<div className="w-full h-72 p-3">
				<div className="w-64 h-64 rounded-[50%] border">
					<img
						className="h-full w-full rounded-[50%]"
						src={`https://i.pravatar.cc/300?img=${id+1}`}
						alt="member image"
					/>
				</div>
			</div>
			<p className="font-semibold text-blue-dark">{member.name}</p>
			<p>{member.title}</p>
			<div className="space-x-5 text-2xl">
				<span className="cursor-pointer inline-block">
					<BsTwitter/>
				</span>
				<span className="cursor-pointer inline-block">
					<BsLinkedin/>
				</span>
			</div>		
		</div>
	);
}


function Team(){
	return (
		<section className="text-center w-[85%] mx-auto py-24">
			<header>
				<h2 className="text-blue-dark text-4xl font-semibold capitalize">Meet Our Team</h2>
				<p className="mt-4">We're are a dynamic group of individuals who are passionate about what we do</p>
			</header>
			<div className="flex flex-row p-5 flex-wrap justify-between">
			{
				members.map((member,index) => (
					<TeamCard props={[member,index]} key={index}/>
				))
			}
			</div>
		</section>
	);
}

export default Team;