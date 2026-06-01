const voicebanks = [
  {
    id: "iirai-v1",
    name: "Iirai",
    version: "V1",
    type: "CV",
    language: "Japanese",
    range: "G3–D4",
    status: "released",
    statusText: "Released",
    description: "The original voicebank with a soft, gentle timbre. Designed for ballads and emotional pieces.",
    link: "voicebank.html?id=iirai-v1",

    // Wiki-like extended info
    wiki: {
      overview: "Iirai V1 is a CV-based Japanese voicebank focused on expressive, emotional singing. Ideal for ballads, mid-tempo pop, and soft electronic tracks.",
      features: [
        "Soft, gentle timbre",
        "Natural vibrato control",
        "Optimized for mid-range melodies",
        "Light dynamic range for smooth phrasing"
      ],
      usage: "Best for lyrical, emotional performances. Avoid extreme staccato or very aggressive genres.",
      recordingNotes: "Recorded at 44.1kHz, 16-bit. Multiple dynamics included for gentle articulation.",
      license: "Freeware for personal and commercial use with attribution."
    },

    gallery: [
      "assets/img/covers/iirai-v1.png",
      "assets/img/wiki/iirai-v1-waveform.png",
      "assets/img/wiki/iirai-v1-range.png"
    ]
  },
  {
    id: "iirai-v2",
    name: "Iirai",
    version: "V2",
    type: "VCV",
    language: "Japanese",
    range: "F3–E4",
    status: "released",
    statusText: "Released",
    description: "Refined version with expanded range and smoother transitions. Better for dynamic arrangements.",
    link: "voicebank.html?id=iirai-v2",

    wiki: {
      overview: "Iirai V2 improves on V1 with a VCV structure, smoother phoneme transitions, and a wider practical range.",
      features: [
        "VCV structure for smoother legato",
        "Extended upper range",
        "Improved pitch envelope tuning",
        "Additional phoneme variations"
      ],
      usage: "Suitable for dynamic pop, rock, and electronic arrangements with more articulation.",
      recordingNotes: "Recorded at 48kHz, 24-bit. Additional dynamics and phoneme splits added.",
      license: "Freeware for personal and commercial use with attribution."
    },

    gallery: [
      "assets/img/covers/iirai-v2.png",
      "assets/img/wiki/iirai-v2-comparison.png",
      "assets/img/wiki/iirai-v2-phonemes.png"
    ]
  },
  {
    id: "takismana",
    name: "Takismana",
    version: "V1",
    type: "CVVC",
    language: "Japanese",
    range: "E3–F4",
    status: "beta",
    statusText: "Beta",
    description: "A darker, more intense voice with sharp attack. Ideal for rock and electronic genres.",
    link: "voicebank.html?id=takismana",

    wiki: {
      overview: "Takismana is a darker, more aggressive voicebank designed for rock, metal, and hard electronic styles.",
      features: [
        "Sharp attack and strong consonants",
        "Darker timbre with edgy resonance",
        "CVVC structure for natural flow",
        "Optimized for high-energy performances"
      ],
      usage: "Best for rock, metal, industrial, and aggressive electronic genres. Less suitable for soft ballads.",
      recordingNotes: "Recorded at 48kHz, 24-bit. Extra emphasis on consonant clarity and dynamic contrast.",
      license: "Beta freeware for personal use; commercial use requires permission."
    },

    gallery: [
      "assets/img/covers/takismana.png",
      "assets/img/wiki/takismana-attack.png",
      "assets/img/wiki/takismana-range.png"
    ]
  },
  {
    id: "eugene",
    name: "Eugene",
    version: "V1",
    type: "CV",
    language: "English/Japanese",
    range: "A2–C4",
    status: "upcoming",
    statusText: "Upcoming",
    description: "Bilingual voicebank with a warm, masculine tone. Release scheduled for late 2026.",
    link: "voicebank.html?id=eugene",

    wiki: {
      overview: "Eugene is a bilingual CV voicebank planned for late 2026, designed for both English and Japanese vocal synthesis with a warm, masculine tone.",
      features: [
        "Bilingual phoneme set (EN + JP)",
        "Warm, natural timbre",
        "Optimized for mid-low range",
        "Balanced dynamics for versatile use"
      ],
      usage: "Suitable for pop, ballads, and singer-songwriter styles in both languages.",
      recordingNotes: "In progress. Target: 48kHz, 24-bit, with multiple dynamics and phoneme variations.",
      license: "Planned freeware with attribution; final terms to be announced."
    },

    gallery: [
      "assets/img/covers/eugene-placeholder.png"
    ]
  }
];