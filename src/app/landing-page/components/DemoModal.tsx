'use client';

import { useEffect } from 'react';
import Icon from '@/src/components/ui/AppIcon';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-2xl font-bold text-text-primary">FuelSense Demo Video</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
          </button>
        </div>

        <div className="relative bg-black aspect-video">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Icon name="PlayCircleIcon" size={64} className="text-white/50 mx-auto mb-4" variant="solid" />
              <p className="text-white/70">Demo video would play here</p>
              <p className="text-white/50 text-sm mt-2">2 minutes overview of FuelSense features</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-surface">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <Icon name="CameraIcon" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-text-primary">Smart Receipt Capture</p>
            </div>
            <div className="text-center">
              <Icon name="MapPinIcon" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-text-primary">GPS Trip Tracking</p>
            </div>
            <div className="text-center">
              <Icon name="ChartBarIcon" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-text-primary">Earnings Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;