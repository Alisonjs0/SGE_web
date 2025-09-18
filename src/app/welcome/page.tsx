import { FaArrowRight } from "react-icons/fa";
import WelcomeHeader from "@/components/WelcomeHeader";
import WelcomeTitle from "@/components/WelcomeTitle";
import ResourceCard from "@/components/ResourceCard";
import ActionButton from "@/components/ActionButton";
import { resources } from "@/data/resources";

export default function Welcome() {
  const handleExploreResources = () => {
    // Aqui você pode adicionar a lógica para navegar ou executar ações
    console.log("Explorar recursos clicado");
  };

  return (
    <div className="h-screen bg-gradient-custom flex items-center justify-center overflow-hidden">
      <div className="bg-white w-2/3 rounded-2xl">
        {/* Header com Logo */}
        <WelcomeHeader />

        {/* Título Principal */}
        <WelcomeTitle 
          title="Dificuldade com a manutenção do seu sistema?"
          subtitle="Apagamos seu problema!"
        />

        {/* Grid de Recursos */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </div>

        {/* Botão de Ação */}
        <ActionButton
          text="Explorar Recursos"
          icon={FaArrowRight}
          onClick={handleExploreResources}
        />
      </div>
    </div>
  );
}
