import HeroSection from "../HeroSection/HeroSection";
import heroImage from '../../assets/hero-image.jpg'



const Landing = () => {

	return (
		<>
			<HeroSection
			imageSrc={heroImage}
			headerText="Make your party fun!"
			subHeaderText="Create your custom playlist"
			ctaText="Create Playlist"
			/>
		</>
	)
}

export default Landing;
