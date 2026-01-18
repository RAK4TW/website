import { Animated } from "react-animated-css";
import agility from "../../assets/agility.jpg";
import bgi from "../../assets/bgi.jpg";
import byte from "../../assets/byte_thumb.jpg";
import intactpic from "../../assets/intact-pic.jpg";
import jlrfd from "../../assets/jlrfd.jpg";
import mardo from "../../assets/mardo.jpg";
import mdc1 from "../../assets/mdc1.jpg";
import mdc2 from "../../assets/mdc2.jpg";
import mdc3 from "../../assets/mdc3.jpg";
import mdc4 from "../../assets/mdc4.jpg";
import sda from "../../assets/sda.jpg";
import suresmile from "../../assets/suresmile.jpg";
import surity from "../../assets/surity.jpg";
import vmt from "../../assets/vmt.jpg";

export default function DetailboxProjects({ history }) {
	return (
		<Animated
			animationIn="fadeInRight"
			animationOut="fadeOutDown"
			isVisible={true}
			animationInDuration="500"
		>
			<div className="white-bg">
				<div className="detailbox">
					<div className="row">
						<div className="col-9">
							<h1>Projects</h1>
						</div>
						<div
							className="col-3 closex text-right"
							onClick={() => {
								history.replace("/");
							}}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									history.replace("/");
								}
							}}
							aria-label="Close projects view"
						>
							Close [X]
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<p>A selection of my past projects.</p>
						</div>
					</div>

					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">Surity</h2>
							<p>
								Surity is a medical device solutions company, with a site built with Shopify/Hydrogen. This site mostly uses Shopify as a headless CMS, with custom components built in Hydrogen.
							</p>
						</div>
						<div className="col-md-4 text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.surity.care"
							>
								<img alt="Surity medical device solutions website" className="img-fluid" src={surity} loading="lazy" />
							</a>
						</div>
					</div>

					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">SureSmile</h2>
							<p>
								SureSmile was built from the ground up with Next.js/React, TypeScript. This particular website has a modern medical design, and is tailored to both patients and doctors. Also included are a case library and pages documenting processes.
							</p>
						</div>
						<div className="col-md-4 text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.suresmile.com"
							>
								<img alt="SureSmile orthodontic website" className="img-fluid" src={suresmile} loading="lazy" />
							</a>
						</div>
					</div>

					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">Byte</h2>
							<p>
								Developed new Shopify site using a custom theme utilizing the
								latest CSS, HTML5 and pure JavaScript techniques from concept to
								completion. Company was eventually sold for over $1 billion USD.
							</p>
						</div>
						<div className="col-md-4 text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://web.archive.org/web/20241007185421/https://www.byte.com/"
							>
								<img alt="Byte clear aligners website" className="img-fluid" src={byte} loading="lazy" />
							</a>
						</div>
					</div>

					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">Agility Fuel Solutions</h2>
							<p>
								WordPress site with custom theme edits, CSS and JavaScript
								customization. WooCommerce integration also customized.
							</p>
						</div>
						<div className="col-md-4 text-center">
							<img alt="Agility Fuel Solutions website" className="img-fluid" src={agility} loading="lazy" />
						</div>
					</div>
					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">Business Growth Innovators</h2>
							<p>
								Developed entire site, including all design, images,
								functionality and more. Built using WordPress.
							</p>
						</div>
						<div className="col-md-4">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.businessgrowthinnovators.com"
							>
								<img alt="Business Growth Innovators website" className="img-fluid" src={bgi} loading="lazy" />
							</a>
						</div>
					</div>
					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">SDA Partnership USA</h2>
							<p>Custom UX/UI solution for architecture firm's website. </p>
						</div>
						<div className="col-md-4">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://web.archive.org/web/20170723072442/http://www.sdapartnershipusa.com/sda-design.html"
							>
								<img alt="SDA Partnership USA architecture website" className="img-fluid" src={sda} loading="lazy" />
							</a>
						</div>
					</div>
					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">Accelerated Mobile Pages (AMP)</h2>
							<p>
								Website design created and developed around the AMP framework
								for near instantaneous loading.
							</p>
						</div>
						<div className="col-md-4">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://rak4tw.github.io/INTACT/"
							>
								<img alt="INTACT AMP website demo" className="img-fluid" src={intactpic} loading="lazy" />
							</a>
						</div>
					</div>
					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">Jewelry By Mardo</h2>
							<p>
								Took design from PhotoShop file and built it out using Bootstrap
								utilizing the Modx CMS. Wrote custom PHP to properly display
								many different types of jewelry, in conjunction with Bootstrap's
								built in utilities and JavaScript. Site now archived online.
							</p>
						</div>
						<div className="col-md-4">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://web.archive.org/web/20160430191043/http://jewelrybymardo.com/"
							>
								<img alt="Jewelry By Mardo e-commerce website" className="img-fluid" src={mardo} loading="lazy" />
							</a>
						</div>
					</div>
					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">
								Jaguar Land Rover Facility Design
							</h2>
							<p>
								Built and maintained architecture documents website, which only
								certain authorized members could access.
							</p>
						</div>
						<div className="col-md-4">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.jaguarlandroverfacilitydesign.com/"
							>
								<img
									alt="Jaguar Land Rover Facility Design website"
									className="img-fluid"
									src={jlrfd}
									loading="lazy"
								/>
							</a>
						</div>
					</div>
					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">VM-Tech</h2>
							<p>
								Computer services website built on Modx CMS, and uses a
								completely separate (not responsive) mobile site.
							</p>
						</div>
						<div className="col-md-4">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://web.archive.org/web/20160726015500/https://vm-tech.com/"
							>
								<img
									alt="VM-Tech computer services website"
									className="img-fluid"
									src={vmt}
									loading="lazy"
								/>
							</a>
						</div>
					</div>
					<div className="row project-entry">
						<div className="col-md-8">
							<h2 className="about-format">Mobile Design Concepts</h2>
							<p>
								These are mobile site concepts that I created, which include
								UI/UX features and functionality. These were created in
								PhotoShop.
							</p>
						</div>
						<div className="col-md-4">
							<div className="row">
								<div className="col-md-6">
									<a target="_blank" rel="noopener noreferrer" href={mdc1}>
										<img
											alt="Responsive Mobile Design concept 1"
											className="img-fluid"
											src={mdc1}
											loading="lazy"
										/>
									</a>
								</div>
								<div className="col-md-6">
									<a target="_blank" rel="noopener noreferrer" href={mdc2}>
										<img
											alt="Responsive Mobile Design concept 2"
											className="img-fluid"
											src={mdc2}
											loading="lazy"
										/>
									</a>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<a target="_blank" rel="noopener noreferrer" href={mdc3}>
										<img
											alt="Responsive Mobile Design concept 3"
											className="img-fluid"
											src={mdc3}
											loading="lazy"
										/>
									</a>
								</div>
								<div className="col-md-6">
									<a target="_blank" rel="noopener noreferrer" href={mdc4}>
										<img
											alt="Responsive Mobile Design concept 4"
											className="img-fluid"
											src={mdc4}
											loading="lazy"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Animated>
	);
}
