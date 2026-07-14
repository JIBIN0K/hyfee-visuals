import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-zinc-950"
    >
      <Container>

        <SectionHeader
          badge="CONTACT"
          title="Let's Work Together"
          description="Have a project in mind? Reach out through your preferred platform and let's create something unforgettable."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* Email */}

          <Card>

            <a
              href="mailto:hyfeetube@gmail.com"
              className="flex h-full flex-col p-10"
            >

              <MdEmail className="text-5xl text-purple-400" />

              <h3 className="mt-8 text-2xl font-bold text-white">
                Email
              </h3>

              <p className="mt-4 flex-1 break-all leading-7 text-zinc-400">
                hyfeetube@gmail.com
              </p>

              <span className="mt-auto pt-8 font-semibold text-purple-400 transition group-hover:translate-x-1">
                Send Email →
              </span>

            </a>

          </Card>

          {/* WhatsApp */}

          <Card>

            <a
              href="https://wa.me/918943557986"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col p-10"
            >

              <FaWhatsapp className="text-5xl text-green-400" />

              <h3 className="mt-8 text-2xl font-bold text-white">
                WhatsApp
              </h3>

              <p className="mt-4 flex-1 leading-7 text-zinc-400">
                +91 8943557986
              </p>

              <span className="mt-auto pt-8 font-semibold text-green-400 transition group-hover:translate-x-1">
                Open Chat →
              </span>

            </a>

          </Card>

          {/* Instagram */}

          <Card>

            <a
              href="https://www.instagram.com/hyfee.visuals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col p-10"
            >

              <FaInstagram className="text-5xl text-pink-500" />

              <h3 className="mt-8 text-2xl font-bold text-white">
                Instagram
              </h3>

              <p className="mt-4 flex-1 leading-7 text-zinc-400">
                @hyfee.visuals
              </p>

              <span className="mt-auto pt-8 font-semibold text-pink-400 transition group-hover:translate-x-1">
                Visit Profile →
              </span>

            </a>

          </Card>

        </div>

      </Container>
    </Section>
  );
}