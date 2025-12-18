import { Image } from '../interfaces/image.interface';
import { ImageCollection } from '../interfaces/rest-unsplash.interface';

export class UnsplashImageMapper {

  static mapRestUnsplashToImage(item: ImageCollection): Image {

    return {
      id: item.id,
      slug: item.slug,
      description: item.description || '',
      alt_description: item.alt_description,
      urls: {
        raw: item.urls.raw,
        full: item.urls.full,
        regular: item.urls.regular,
        small: item.urls.small,
        thumb: item.urls.thumb,
      },
      user: {
        id: item.user.id,
        name: item.user.name,
      }
    }

  }

  static mapRestUnsplashToImages(items: ImageCollection[]): Image[] {
    return items.map(this.mapRestUnsplashToImage);
  }

}
