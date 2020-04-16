import React from 'react'

/*Componentes*/
import MenuComponent from '../../components/menu-1/index'
import ProfileCard from '../../components/profile-card/index'
import Footer from '../../components/footer/index'

function Profile(props) {

	return (
		<>
			<MenuComponent />
			<ProfileCard />
			<Footer />
		</>
	);
}

export default Profile;