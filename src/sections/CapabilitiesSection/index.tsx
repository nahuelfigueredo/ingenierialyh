import { CapabilitiesContent } from "./components/CapabilitiesContent";

export const CapabilitiesSection = () => {
	return (
		<section id="capabilities-section" className="mt-8 bg-white pb-16 text-zinc-500 md:mt-12 md:pb-[220px]">
			<CapabilitiesContent />
		</section>
	);
};

export { CapabilitiesContent };