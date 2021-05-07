/* Core */
import { makeAutoObservable } from 'mobx';

class TagStore {
    selectedTagId: null | string = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedTag(nextTag: string) {
        this.selectedTagId = nextTag;
    }

    get getSelectedTagId() {
        return this.selectedTagId;
    }
}

export const tagStore = new TagStore();
