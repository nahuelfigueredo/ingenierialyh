import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import brandLogo from "@/assets/Logo-original-2-blanco-1.png";

type MobileMenuProps = {
	isOpen: boolean;
	onClose: () => void;
	onNavigate?: (sectionId: string) => void;
};

type MenuLink = {
	label: string;
	targetId: string;
};

const menuItems = [
	{
		label: "Quiénes somos",
		targetId: "hero-section",
		sub: [
	{ label: "Nuestra empresa", targetId: "/nuestra-empresa" },
			{ label: "Misión, visión y valores", targetId: "/mision-vision-valores" },
		],
	},
	{
		label: "Qué hacemos",
		targetId: "capabilities-section",
		sub: [
			{ label: "Servicios", targetId: "/mercados" },
			{ label: "Alquiler de flota", targetId: "/alquiler-de-flota" },
		],
	},
	{
		label: "Cómo lo hacemos",
		targetId: "innovation-section",
		sub: [
			{ label: "Garantía de entrega", targetId: "/garantia-de-entrega" },
		],
	},
	{
		label: "Nuestros proyectos",
		targetId: "projects-section",
		sub: [
			{ label: "Hornos", targetId: "/proyectos/hornos" },
			{ label: "Piping", targetId: "/proyectos/piping" },
			{ label: "Estructuras y Equipos", targetId: "/proyectos/estructuras" },
			{ label: "Metalurgia", targetId: "/proyectos/metalurgia" },
		],
	},
	{
		label: "Clientes",
		targetId: "/clientes",
		sub: [],
	},
	{
		label: "Contacto",
		targetId: "/contacto",
		sub: [],
	},
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	const navigate = useNavigate();

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleNavigation = (targetId: string) => (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		document.body.style.overflow = "";
		onClose();
		if (targetId.startsWith("/")) {
			navigate(targetId);
			return;
		}
		setTimeout(() => {
			const el = document.getElementById(targetId);
			if (el) el.scrollIntoView({ behavior: "smooth" });
		}, 420);
	};

	return (
		<div
			className={`fixed inset-0 z-[200] flex flex-col bg-sky-950 text-white transition-transform duration-500 ease-in-out ${
				isOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="flex items-center justify-between px-8 py-8 md:px-20">
				<button type="button" className="block h-[52px] w-[210px] md:h-[84px] md:w-[338px]" onClick={handleNavigation("hero-section")}>
					<img src={brandLogo} alt="Ingenieria LYH" className="block h-full w-full object-contain object-left" />
				</button>

				<button
					onClick={onClose}
					className="flex items-center gap-2.5 bg-transparent p-0 text-white"
					aria-label="Cerrar menú"
				>
					<span className="relative block h-3 w-4 overflow-hidden">
						<span className="absolute left-0 top-1/2 block h-px w-full origin-center rotate-45 bg-white"></span>
						<span className="absolute left-0 top-1/2 block h-px w-full origin-center -rotate-45 bg-white"></span>
					</span>
					<span className="hidden text-sm md:block">Cerrar</span>
				</button>
			</div>

			<nav className="flex-1 overflow-y-auto px-8 py-8 md:px-20">
				<ul className="space-y-0 divide-y divide-white/10">
					{menuItems.map((item) => (
						<li key={item.label}>
						<div className="py-3">
							<button
								type="button"
								className="font-moderatmedium text-xl transition-colors hover:text-emerald-400 md:text-2xl"
									onClick={handleNavigation(item.targetId)}
								>
									{item.label}
								</button>

								{item.sub.length > 0 && (
									<ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
										{item.sub.map((subItem: MenuLink) => (
											<li key={`${item.label}-${subItem.label}`}>
												<button
													type="button"
													className="text-sm text-white/60 transition-colors hover:text-white"
													onClick={handleNavigation(subItem.targetId)}
												>
													{subItem.label}
												</button>
											</li>
										))}
									</ul>
								)}
							</div>
						</li>
					))}
				</ul>
			</nav>

			<div className="border-t border-white/10 px-8 py-8 md:px-20">
				<button type="button" className="text-sm text-white/60 transition-colors hover:text-white" onClick={handleNavigation("footer-section")}>
					Accedé al Grupo Ingeniería LYH →
				</button>
			</div>
		</div>
	);
};
