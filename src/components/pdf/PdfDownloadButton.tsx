import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface PdfDownloadButtonProps {
  className?: string;
  showLabel?: boolean;
  onClick?: () => void;
}

export function PdfDownloadButton({ className, showLabel, onClick }: PdfDownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const [{ pdf }, { ResumePdf }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./ResumePdf'),
      ]);

      const blob = await pdf(<ResumePdf />).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = '김규일_이력서.pdf';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err) {
      console.error('PDF 생성 실패:', err);
    } finally {
      setLoading(false);
      onClick?.();
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={className}
      aria-label="이력서 PDF 다운로드"
      title="이력서 다운로드"
    >
      {loading ? (
        <>
          <Loader2 size={showLabel ? 16 : 18} style={{ animation: 'spin 1s linear infinite' }} />
          {showLabel && <span>PDF 생성중...</span>}
        </>
      ) : (
        <>
          <Download size={showLabel ? 16 : 18} />
          {showLabel && <span>이력서 다운로드</span>}
        </>
      )}
    </button>
  );
}
