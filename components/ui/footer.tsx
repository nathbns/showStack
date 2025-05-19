import React from "react";
import { RiGithubFill, RiTwitterFill } from "@remixicon/react";
import { ModeToggle } from "./mode-toggle";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-[var(--border)] py-6 mt-10 max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BentoGr.id. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nathbns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            <RiGithubFill className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://x.com/Nattend_CS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            <RiTwitterFill className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
