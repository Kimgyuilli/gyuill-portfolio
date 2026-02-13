import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { heroData } from '@/data/hero';

async function fetchImageAsBase64(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

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

      const profileImageBase64 = await fetchImageAsBase64(heroData.profileImage);
      const blob = await pdf(<ResumePdf profileImageBase64={profileImageBase64} />).toBlob();

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
