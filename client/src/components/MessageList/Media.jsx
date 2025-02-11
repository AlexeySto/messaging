import React from 'react';

const Media = ({ media_type, media_url }) => {
    if(media_type) {
        media_type = media_type.split('/')[0]
    }
    const renderMedia = () => {
        switch (media_type) {
            case null:
                return null;
            case 'image':
                return imageView();
            case 'video':
                return videoView();
            case 'audio':
                return audioView();
            default:
                return <p>Неподдерживаемый тип медиа.</p>;
        }
    };

    const imageView = () => {
        return <img src={media_url} alt="Media" style={{ maxWidth: '100%', maxHeight: '400px' }} />;
    };

    const videoView = () => {
        return (
            <video controls style={{ maxWidth: '100%', maxHeight: '400px' }}>
                <source src={media_url} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
        );
    };

    const audioView = () => {
        return (
            <audio controls>
                <source src={media_url} type="audio/mpeg" />
                Ваш браузер не поддерживает аудио.
            </audio>
        );
    };


    return (
        <div className="media-container">
            {renderMedia()}
        </div>
    );
};

export default Media;
