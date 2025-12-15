/**
 * Verifica se o conteúdo é um arquivo de vídeo baseado na extensão
 */
export const isVideoFile = (content: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some((ext) => content.toLowerCase().endsWith(ext));
};
