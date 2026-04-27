import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Briefcase, Database, Search, ExternalLink, Calendar, Code2, Layout, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const experiences = [
    {
        id: "sat",
        company: "PT. Sumber Alfaria Trijaya, Tbk.",
        role: "Procurement Data & System Specialist",
        period: "Oktober 2025 - April 2026",
        badge: "Internship",
        icon: <Briefcase className="text-blue-500" size={24} />,
        description: "Actively contributed to the development and maintenance of large-scale digital store platforms.",
        details: [
            "Berperan sebagai fungsi pusat Data & System Procurement yang terlibat dalam end-to-end proses pengadaan, menjembatani bisnis–sistem, menjaga konsistensi & integritas data nasional, serta mengoordinasikan alur procurement lintas Tim Buyer, cabang Alfamart, dan unit Alfa Group.",
            "Mengelola master & data strategis procurement end-to-end (SPH, vendor, PLU, SPK/PO), menyusun laporan evaluasi supplier nasional, serta menjaga akurasi & integritas data sebagai dasar pengambilan keputusan lintas cabang dan divisi.",
            "Terlibat dalam pengembangan sistem procurement end-to-end lintas Business–IT, termasuk perancangan flow aplikasi, desain UI/UX (Figma), serta pelaksanaan QA dan (UAT) bersama tim IT untuk memastikan kesesuaian dengan kebutuhan bisnis.",
            "Mengembangkan 1 website internal secara full stack (frontend, backend, dan database) untuk mendukung digitalisasi proses."
        ],
        stack: ["Excel","Figma","Python","Databaase Administraton","Internal Application","Flow System"],
        links: [] as {
            label: string;
            url: string;
            variant?: "default" | "outline";
            icon?: React.ReactNode;
        }[]
    },

    {
        id: "lentera",
        company: "VINIX 7",
        role: "Junior Data Scientist",
        period: "Februari 2025 - Mei 2025",
        badge: "Work Training",
        icon: <Database className="text-green-500" size={24} />,
        description: "Focused on integrated web development with relational database management.",
        details: [
            "Mengikuti program pembelajaran intensif data science yang mencakup Python, SQL, Machine Learning, dan Business Intelligence dengan pendekatan praktik langsung",
            "Menyampaikan insight melalui visualisasi interaktif dan storytelling data menggunakan pendekatan Business Intelligence dan alat bantu visual seperti Power BI."
        ],
        stack: ["MySql","Database","Machine Learning","Business Intelligence","Power BI"],
        links: [] as {
            label: string;
            url: string;
            variant?: "default" | "outline";
            icon?: React.ReactNode;
        }[]
    },

    {
        id: "kinema",
        company: "PT. Kinema Systrans",
        role: "Web Development & UI/UX Design",
        period: "February 2024 - June 2024",
        badge: "Independent Study",
        icon: <Search className="text-orange-500" size={24} />,
        description: "In-depth learning of the web product development lifecycle, from design to prototyping.",
        details: [
            "A. Micro Project (Freelance Website)",
            "Product Research",
            "Designed Wireframe Product",
            "Designed High Fidelity Product",
            "Making Prototype Product",
            "B. Massive Project (Mental Health Service Website)",
            "Product Research",
            "Designed Wireframe Product",
            "Designed High Fidelity Product",
            "Making Prototype Product",
            "Developing Frontend Website"
        ],
        stack: ["Figma","Prototyping","Product Research","UI/UX Principles","Frontend Development","Backend Development","Flow System"],
        links: [] as {
            label: string;
            url: string;
            variant?: "default" | "outline";
            icon?: React.ReactNode;
        }[]
    }
];

export function ProjectsSection() {
    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start p-4 md:p-8 pt-4 md:pt-8 pb-36 overflow-y-auto">
            <div className="max-w-5xl w-full flex flex-col space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Experience & Projects
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                        Click on the cards to view details of my contributions and the technologies I used.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experiences.map((exp) => (
                        <Dialog key={exp.id}>
                            <DialogTrigger asChild>
                                <Card className="group cursor-pointer border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                                    <CardHeader className="pb-4">
                                        <div className="mb-4 p-3 w-fit rounded-xl bg-background border border-border group-hover:scale-110 transition-transform duration-300">
                                            {exp.icon}
                                        </div>

                                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </CardTitle>

                                        <CardDescription className="font-medium text-foreground/80 mt-1">
                                            {exp.company}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="flex items-center text-xs text-muted-foreground gap-2">
                                            <Calendar size={14}/> {exp.period}
                                        </div>

                                        <div className="mt-4 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Details <ExternalLink size={14} className="ml-2"/>
                                        </div>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>

                            <DialogContent
                                onInteractOutside={(e)=>e.preventDefault()}
                                onEscapeKeyDown={(e)=>e.preventDefault()}
                                className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-2xl sm:rounded-2xl border-border/50 shadow-2xl"
                            >
                                <DialogHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant="secondary">
                                            {exp.badge}
                                        </Badge>
                                    </div>

                                    <DialogTitle className="text-2xl font-bold">
                                        {exp.role}
                                    </DialogTitle>

                                    <DialogDescription className="text-lg font-semibold text-foreground/90">
                                        {exp.company}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-6 py-4">

                                    <div className="flex items-center gap-2 text-muted-foreground text-sm border-b pb-4">
                                        <Calendar size={16}/> <span>{exp.period}</span>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-bold flex items-center gap-2">
                                            <Code2 size={18}/> Key Contributions:
                                        </h4>

                                        <ul className="grid gap-2">
                                            {exp.details.map((detail,index)=>(
                                                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"/>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <h4 className="font-bold flex items-center gap-2">
                                            <Layout size={18}/> Technologies & Tools:
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.stack.map((tech)=>(
                                                <Badge key={tech} variant="outline">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {exp.links && exp.links.length > 0 && (
                                        <div className="space-y-3 pt-4 border-t border-border/50">
                                            <h4 className="font-bold flex items-center gap-2">
                                                <LinkIcon size={18}/> Project Links:
                                            </h4>

                                            <div className="flex flex-wrap gap-3">
                                                {exp.links.map((link,idx)=>(
                                                    <Link
                                                        key={idx}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button variant={link.variant || "outline"}>
                                                            {link.icon} {link.label}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}