// Contenido PROVISIONAL de Lab, Academia y Proyectos.
const make = (kind: string) => [1, 2, 3].map((n) => ({
  title: `${kind} ${n} (provisional)`, tag: "Por definir",
  text: "Descripción provisional. Se reemplazará con el contenido definitivo.",
  image: undefined as { src: string; alt: string } | undefined,
}));
export const lab = make("Iniciativa");
export const academia = make("Publicación");
export const projects = make("Proyecto");
