import { 
  FaMapMarkerAlt, 
  FaShieldAlt, 
  FaBarcode, 
  FaClipboardCheck 
} from "react-icons/fa";

export interface Resource {
  id: string;
  icon: any;
  title: string;
  description: string;
}

export const resources: Resource[] = [
  {
    id: "localize-extintores",
    icon: FaMapMarkerAlt,
    title: "Localize Extintores",
    description: "Descubra em tempo real, onde estão localizados e a situação de cada um."
  },
  {
    id: "seguranca-preventiva",
    icon: FaShieldAlt,
    title: "Segurança Preventiva",
    description: "Garanta descontos exclusivos na nossa plataforma e economize em cada compra"
  },
  {
    id: "gerencie-informacoes",
    icon: FaBarcode,
    title: "Gerencie Informações",
    description: "Escanele o código de barras, e verifique todas as informações"
  },
  {
    id: "verifique-indice",
    icon: FaClipboardCheck,
    title: "Verifique índice",
    description: "Últimas ocorrências, validade e outros recursos."
  }
];
