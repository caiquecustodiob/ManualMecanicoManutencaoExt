import { UserProfile } from "../types";

export const generateCertificate = async (
  userName: string,
  courseTitle: string,
  type: 'phase' | 'course',
  detailText: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    // A4 Landscape approximation in pixels (low res for speed, high enough for screen)
    const width = 1200;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      reject('Canvas not supported');
      return;
    }

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Border (Nordeste Red)
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 20;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Inner thin border
    ctx.strokeStyle = '#b91c1c';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Header Logo Area
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(100, 80, width - 200, 10);

    // Title
    ctx.textAlign = 'center';
    ctx.fillStyle = '#1f2937'; // Gray-800
    ctx.font = 'bold 50px Arial, sans-serif';
    ctx.fillText('CERTIFICADO DE CONCLUSÃO', width / 2, 180);

    // Subtitle
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 30px Arial, sans-serif';
    const subTitle = type === 'course' ? 'Treinamento Completo' : 'Conclusão de Módulo';
    ctx.fillText(subTitle.toUpperCase(), width / 2, 230);

    // Body Text
    ctx.fillStyle = '#374151'; // Gray-700
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('Certificamos que', width / 2, 320);

    // Name
    ctx.fillStyle = '#111827'; // Gray-900
    ctx.font = 'bold italic 60px Times New Roman, serif';
    ctx.fillText(userName, width / 2, 400);

    // Context
    ctx.fillStyle = '#374151'; // Gray-700
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('Concluiu com êxito a etapa:', width / 2, 480);

    // Course Title
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.fillText(courseTitle, width / 2, 540);

    // Details/Dates
    ctx.fillStyle = '#6b7280'; // Gray-500
    ctx.font = '18px Arial, sans-serif';
    ctx.fillText(detailText, width / 2, 590);
    
    // Date of issue
    const today = new Date().toLocaleDateString('pt-BR');
    ctx.fillStyle = '#6b7280';
    ctx.fillText(`Emitido em: ${today}`, width / 2, 630);

    // Footer / Signature line
    ctx.beginPath();
    ctx.moveTo(width / 2 - 150, 700);
    ctx.lineTo(width / 2 + 150, 700);
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 16px Arial, sans-serif';
    ctx.fillText('SISTEMAS NORDESTE - PCM', width / 2, 730);
    ctx.font = '14px Arial, sans-serif';
    ctx.fillText('Gestão de Manutenção Externa', width / 2, 750);

    resolve(canvas.toDataURL('image/jpeg', 0.85));
  });
};

export const downloadCertificate = (dataUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};