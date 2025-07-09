import React, { useState,ReactElement  } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Trophy,
    Users,
    Heart,
    Code,
    Medal,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';
import { Shrikhand, Rubik } from 'next/font/google';

// Load fonts
const shrikhand = Shrikhand({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-shrikhand',
});
const rubik = Rubik({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-rubik',
});

// Define Achievement Type
type Achievement = {
  id: number;
  title: string;
  subtitle: string;
  icon: ReactElement;
  images: string[];
  description: string;
};

const AchievementsShowcase: React.FC = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

    const achievements: Achievement[] = [
        {
            id: 0,
            title: 'Hack 4 Gov 3 National Finalist',
            subtitle: 'DICT Hack 4 Gov 4 Western Visayas • 2024 • Finalist',
            icon: <Trophy className="w-5 h-5" />,
            images: ['/img/achievements/h4gfinal.jpg'],
            description: 'Reached national finals in the government hackathon competition',
        },
        {
            id: 1,
            title: 'Hack 4 Gov 3 Regional Champion',
            subtitle: 'DICT Hack 4 Gov 4 Western Visayas • 2024 • Champion Regional Competition',
            icon: <Medal className="w-5 h-5" />,
            images: ['/img/achievements/h4gchamp.jpg'],
            description: 'Won the regional championship in the government innovation challenge',
        },
        {
            id: 2,
            title: 'Hack 4 Health 2024',
            subtitle: 'DOH • 2024 • Top 10 Finalist out of 113 Applicants',
            icon: <Heart className="w-5 h-5" />,
            images: ['/img/achievements/h4h.jpg'],
            description: 'Reaching top 10 National Finalist out of 113 Applicants',
        },
        {
            id: 3,
            title: 'E-curate Hackathon 2024',
            subtitle: 'Accenture • Top 3 out of 30 Participants',
            icon: <Code className="w-5 h-5" />,
            images: ['/img/achievements/ecurate.jpg'],
            description: 'Achieved top 3 position in Ecurate hackathon',
        },
        {
            id: 4,
            title: 'Codelympics 2024',
            subtitle: 'ISAT University • Top 9 out of 15 Participants',
            icon: <Users className="w-5 h-5" />,
            images: ['/img/achievements/codelympics.jpg'],
            description: 'Top 9 finalist in the university coding competition',
        },
    ];

    const nextImage = (achievementId: number) => {
        const achievement = achievements.find(a => a.id === achievementId);
        if (!achievement) return;
        setCurrentImageIndex(prev => ({
            ...prev,
            [achievementId]: ((prev[achievementId] || 0) + 1) % achievement.images.length,
        }));
    };

    const prevImage = (achievementId: number) => {
        const achievement = achievements.find(a => a.id === achievementId);
        if (!achievement) return;
        setCurrentImageIndex(prev => ({
            ...prev,
            [achievementId]: ((prev[achievementId] || 0) - 1 + achievement.images.length) % achievement.images.length,
        }));
    };

    const handleAchievementClick = (index: number) => {
        setSelectedAchievement(selectedAchievement === index ? null : index);
    };

    // ImageSlider Component
    interface ImageSliderProps {
        achievement: Achievement;
    }

    const ImageSlider: React.FC<ImageSliderProps> = ({ achievement }) => {
        const currentIndex = currentImageIndex[achievement.id] || 0;

        return (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
                <div className="relative">
                    <div className="aspect-video bg-gray-600 rounded-lg overflow-hidden mb-4">
                        <img
                            src={achievement.images[currentIndex]}
                            alt={`${achievement.title} - Image ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition-opacity duration-500"
                        />

                        {achievement.images.length > 1 && (
                            <>
                                <button
                                    onClick={() => prevImage(achievement.id)}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => nextImage(achievement.id)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Dot Indicators */}
                    {achievement.images.length > 1 && (
                        <div className="flex justify-center space-x-2 mb-4">
                            {achievement.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setCurrentImageIndex(prev => ({
                                            ...prev,
                                            [achievement.id]: index,
                                        }))
                                    }
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        currentIndex === index
                                            ? 'bg-blue-500'
                                            : 'bg-gray-500 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Description */}
                    <div className="text-center">
                        <p className="text-blue-400 font-semibold mb-2">{achievement.description}</p>
                    </div>

                    {/* Thumbnails */}
                    {achievement.images.length > 1 && (
                        <div className="flex space-x-2 overflow-x-auto mt-4">
                            {achievement.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setCurrentImageIndex(prev => ({
                                            ...prev,
                                            [achievement.id]: index,
                                        }))
                                    }
                                    className={`flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden transition-all ${
                                        currentIndex === index
                                            ? 'ring-2 ring-blue-500 scale-110'
                                            : 'opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#363636] text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-center text-[#FBF8EF] m-2 mb-10 text-6xl ${shrikhand.className}`}>
                    Achievements
                </h1>

                <div className="bg-[#363636] p-6 shadow-md">
                    <div className="space-y-3">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.id}
                                className={`rounded-lg transition-all duration-300 ${
                                    selectedAchievement === index
                                        ? 'bg-blue-600 shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                            >
                                {/* Header */}
                                <div
                                    onClick={() => handleAchievementClick(index)}
                                    className="p-4 cursor-pointer hover:scale-105 transition-transform"
                                >
                                    <div className="flex items-start space-x-3">
                                        <div
                                            className={`p-2 rounded-full ${
                                                selectedAchievement === index ? 'bg-blue-700' : 'bg-gray-600'
                                            }`}
                                        >
                                            {achievement.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-white mb-1">{achievement.title}</h3>
                                            <p className="text-sm text-gray-300">{achievement.subtitle}</p>
                                        </div>
                                        <div className="flex items-center">
                                            {selectedAchievement === index ? (
                                                <ChevronUp className="w-5 h-5 text-blue-300" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        selectedAchievement === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    {selectedAchievement === index && (
                                        <ImageSlider achievement={achievement} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsShowcase;
