import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { Quiz } from "@/components/quiz";
import { PracticeCoding } from "@/components/practice-coding";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <Tabs defaultValue="quiz" className="w-full max-w-2xl">
        <TabsList className="mb-4">
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
          <TabsTrigger value="practice">Practice Coding</TabsTrigger>
        </TabsList>
        <TabsContent value="quiz">
          <Quiz />
        </TabsContent>
        <TabsContent value="practice">
          <PracticeCoding />
        </TabsContent>
      </Tabs>
    </main>
  );
}
