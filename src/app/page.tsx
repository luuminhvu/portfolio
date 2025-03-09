import Photos from "@/components/Photos";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="">Web Developer</span>
              <h1 className="h1">
                Hello, I&apos;m <br />
                <span className="text-accent">Luu Van Vu</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I&apos;m a web developer based in Vietnam. I have rich
                experience in web site design and building, also I am good at
                responsive design, HTML, CSS, JavaScript, jQuery, Bootstrap, and
                WordPress.
              </p>
              <div className="flex flex-col xl:flex-row gap-8 items-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white"
                >
                  <span>Download CV</span>
                  <FileDown className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0 ">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                    items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photos />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
