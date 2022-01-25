interface SideMenuStructureInterface {
  to: string;
  text: string;
}

interface SectionInterface {
  section: string;
  views: SideMenuStructureInterface[];
}
export const sideMenuStructure: SectionInterface[] = [
  {
    section: "Principal",
    views: [
      {
        to: "/",
        text: "Home",
      },
      {
        to: "/code-xamples",
        text: "Codeando",
      },
    ],
  },
];
