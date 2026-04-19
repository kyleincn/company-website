export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '张博士',
    role: '首席执行官',
    description: '教育技术领域资深专家，曾任多所高校特聘教授。',
  },
  {
    id: '2',
    name: '李教授',
    role: '首席技术官',
    description: 'AI和VR技术领军人才，拥有20+项相关专利。',
  },
  {
    id: '3',
    name: '王女士',
    role: '产品总监',
    description: '深耕教育产品设计多年，主导多个成功项目落地。',
  },
];
