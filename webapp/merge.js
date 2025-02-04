const PDFMerger = require('pdf-merger-js').default;

const fs = require('fs');
const path = require('path');

const mergePdfs = async (p1, p2) => {
  const merger = new PDFMerger();
  try {
    await merger.add(p1);
    await merger.add(p2);

    const outputPath = path.join('public', 'merge.pdf');

    // Ensure the 'public' directory exists
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }

    await merger.save(outputPath);
    console.log(`Merged PDF saved to ${outputPath}`);
  } catch (error) {
    console.error("Error merging PDFs:", error);
  }
};

module.exports = { mergePdfs };
