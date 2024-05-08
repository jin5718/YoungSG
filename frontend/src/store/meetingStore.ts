import { create } from "zustand";
import { OpenVidu, Session as OVSession, Publisher, Subscriber } from "openvidu-browser";

interface MeetingState {
  session: OVSession | null;
  screenSession: OVSession | null;
  // sessionId: string;
  subscriber: Subscriber | null;
  screenSubscriber: Subscriber | null;
  publisher: Publisher | null;
  screenPublisher: Publisher | null;
  isAudioEnabled: boolean;
  isVideoEnabled: boolean;
  OV: OpenVidu | null;
  screenOV: OpenVidu | null;

  setSession: (session: OVSession | null) => void;
  setScreenSession: (session: OVSession | null) => void;
  // setSessionId: (sessionId: string) => void;
  setSubscriber: (subscriber: Subscriber | null) => void;
  setScreenSubscriber: (screenSubscriber: Subscriber | null) => void;
  setPublisher: (publisher: Publisher | null) => void;
  setScreenPublisher: (screenPublisher: Publisher | null) => void;
  setIsAudioEnabled: (isAudioEnabled: boolean) => void;
  setIsVideoEnabled: (isVideoEnabled: boolean) => void;
  setOV: (OV: OpenVidu | null) => void;
  setScreenOV: (OV: OpenVidu | null) => void;
}

const useMeetingStore = create<MeetingState>((set) => ({
  session: null,
  screenSession: null,
  // sessionId: "",
  subscriber: null,
  screenSubscriber: null,
  publisher: null,
  screenPublisher: null,
  isAudioEnabled: true,
  isVideoEnabled: true,
  OV: null,
  screenOV: null,

  setSession: (session) => set({ session }),
  setScreenSession: (screenSession) => set({ screenSession }),
  // setSessionId: (sessionId) => set({ sessionId }),
  setSubscriber: (subscriber) => set({ subscriber }),
  setScreenSubscriber: (screenSubscriber) => set({ screenSubscriber }),
  setPublisher: (publisher) => set({ publisher }),
  setScreenPublisher: (screenPublisher) => set({ screenPublisher }),
  setIsAudioEnabled: (isAudioEnabled) => set({ isAudioEnabled }),
  setIsVideoEnabled: (isVideoEnabled) => set({ isVideoEnabled }),
  setOV: (OV) => set({ OV }),
  setScreenOV: (screenOV) => set({ screenOV }),
}));

export default useMeetingStore;